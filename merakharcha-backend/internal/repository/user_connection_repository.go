package repository

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"gorm.io/gorm"
)

type UserConnectionRepository struct {
	DB *gorm.DB
}

func NewUserConnectionRepository(db *gorm.DB) *UserConnectionRepository {
	return &UserConnectionRepository{DB: db}
}

func (r *UserConnectionRepository) AddConnection(conn *models.UserConnection) error {
	return r.DB.Create(conn).Error
}

func (r *UserConnectionRepository) GetConnections(userID uint) ([]models.UserConnection, error) {
	var list []models.UserConnection
	err := r.DB.Where("user_id = ?", userID).Find(&list).Error
	return list, err
}

func (r *UserConnectionRepository) CheckConnection(userID uint, otherUser uint) (bool, error) {
	var conn models.UserConnection
	err := r.DB.
		Where("user_id = ? AND other_user = ?", userID, otherUser).
		First(&conn).Error

	if err == gorm.ErrRecordNotFound {
		return false, nil
	}

	return err == nil, err
}

func (r *UserConnectionRepository) DeleteConnection(userID uint, otherUser uint) error {
	return r.DB.
		Where("user_id = ? AND other_user = ?", userID, otherUser).
		Delete(&models.UserConnection{}).Error
}
