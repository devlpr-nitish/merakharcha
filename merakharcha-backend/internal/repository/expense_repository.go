package repository

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"gorm.io/gorm"
)



type ExpenseRepository struct {
	DB *gorm.DB
}


func NewExpenseRepository(db *gorm.DB) *ExpenseRepository {
	return &ExpenseRepository{DB: db}
}

func (r *ExpenseRepository) Create(expenes *models.Expense) error{
	return r.DB.Create(expenes).Error
}


func (r *ExpenseRepository) GetByUserID(userID uint) ([]models.Expense, error) {
	var expenses []models.Expense
	err := r.DB.
		Preload("Participants").
		Where("paid_by = ? OR id IN (SELECT expense_id FROM expense_participants WHERE user_id = ?)", userID, userID).
		Find(&expenses).Error
	return expenses, err
}