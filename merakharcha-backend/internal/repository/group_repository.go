package repository

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"gorm.io/gorm"
)

type GroupRepository struct {
	DB *gorm.DB
}

func NewGroupRepository(db *gorm.DB) *GroupRepository {
	return &GroupRepository{DB: db}
}

func (r *GroupRepository) Create(group *models.Group) error {
	return r.DB.Create(group).Error
}
