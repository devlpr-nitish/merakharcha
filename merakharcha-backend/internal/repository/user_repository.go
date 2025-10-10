package repository

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
)



func CreateUser(user *models.User) error {

	db := db.GetDB()

	return db.Create(user).Error
}

func GetUserByEmail(email string)(*models.User, error){
	var user models.User
	db := db.GetDB()
	
	if err := db.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
} 