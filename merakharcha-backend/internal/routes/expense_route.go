package routes

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/handlers"
	"github.com/devlpr-nitish/merakharcha-backend/internal/middleware"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/labstack/echo/v4"
)

func ExpenseRoutes(e *echo.Echo) {

	route := e.Group("/api", middleware.JWTAuthMiddleware)

	db := db.GetDB()
	expense_repo := repository.NewExpenseRepository(db)
	expense_service := services.NewExpenseService(expense_repo)
	expense_handler := handlers.NewExpenseHandler(expense_service)

	route.POST("/expenses", expense_handler.CreateExpense)

	route.GET("/expenses", expense_handler.GetUserExpenses)
}
