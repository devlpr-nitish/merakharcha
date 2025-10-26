package services

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
)


type ExpenseService struct {
	Repo *repository.ExpenseRepository
}

func NewExpenseService(repo *repository.ExpenseRepository) *ExpenseService {
	return &ExpenseService{Repo : repo}
}

type InvalidExpenseError struct {
	Message string
}

func (e *InvalidExpenseError) Error() string {
	return e.Message
}


func (s *ExpenseService) CreateExpense(expense *models.Expense) error {
	if expense.Amount <= 0 {
		return &InvalidExpenseError{"Amount must be greater than 0"}
	}

	return s.Repo.Create(expense)
}

func (s *ExpenseService) GetUserExpenses(userID uint) ([]models.Expense, error){
	return s.Repo.GetByUserID(userID)
}
