package handlers

import (
	"net/http"

	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/labstack/echo/v4"
)

type ExpenseHandler struct {
	Service *services.ExpenseService
}

func NewExpenseHandler(s *services.ExpenseService) *ExpenseHandler {
	return &ExpenseHandler{Service: s}
}

func (h *ExpenseHandler) CreateExpense(c echo.Context) error {
	var req models.Expense

	if err := c.Bind(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid request payload")
	}

	if err := h.Service.CreateExpense(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Failed to create expense")
	}

	return utils.RespondSuccess(c, http.StatusCreated, "Expense created successfully", req)
}

func (h *ExpenseHandler) GetUserExpenses(c echo.Context) error {
	userID := c.Get("user_id").(uint)

	expenses, err := h.Service.GetUserExpenses(userID)

	if err != nil {
		return utils.RespondError(c, http.StatusInternalServerError, err, "Failed to fetch expenses")
	}

	return utils.RespondSuccess(c, http.StatusOK, "Expenses fetched successfully", map[string][]models.Expense{"expenses": expenses})
}
