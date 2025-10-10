package services

import (
	"errors"

	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
	"golang.org/x/crypto/bcrypt"
)



func RegisterUser(username, email, password, name string) (*models.User, error){

	existing, _ := repository.GetUserByEmail(email);

	if existing != nil {
		return nil, errors.New("email already registered");
	}

	hashPassword , err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	if err != nil {
		return nil, err;
	}

	user := &models.User{
		Username: username,
		Email: email,
		Password: string(hashPassword),
		Name: name,
	}

	if err := repository.CreateUser(user); err != nil {
		return nil, err;
	}

	return user, nil;
}