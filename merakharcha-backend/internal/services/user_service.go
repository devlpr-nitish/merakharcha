package services

import (
	"errors"
	"strings"

	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"golang.org/x/crypto/bcrypt"
)

func RegisterUser(username, email, password, name string) (*models.User, error) {

	existingUsername, _ := repository.GetUserByUsername(username)
	
    if existingUsername != nil {
        return nil, errors.New("username already taken")
    }

	existing, _ := repository.GetUserByEmail(email)

	if existing != nil {
		return nil, errors.New("email already registered")
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	if err != nil {
		return nil, err
	}

	user := &models.User{
		Username: username,
		Email:    email,
		Password: string(hashPassword),
		Name:     name,
	}

	if err := repository.CreateUser(user); err != nil {
		return nil, err
	}

	return user, nil
}

func LoginUser(identifier string, password string) (string, error) {
	var user *models.User
	var err error

	if strings.Contains(identifier, "@") {
		user, err = repository.GetUserByEmail(identifier)
	} else {
		user, err = repository.GetUserByUsername(identifier)
	}

	if err != nil || user == nil {
		return "", errors.New("user not found")
	}

	if !MatchPassword(password, user.Password) {
		return "", errors.New("invalid password")
	}

	token, err := utils.GenerateJWT(user.ID)
	
	if err != nil {
		return "", err
	}

	return token, nil
}

func MatchPassword(password, hashedPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	return err == nil
}
