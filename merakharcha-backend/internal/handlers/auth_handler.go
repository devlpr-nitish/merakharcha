package handlers

import (
	"net/http"

	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
)


type RegisterRequest struct{
	Username string `json:"username" validate:"required"`
	Email string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required,min=6"`
	Name string `json:"name"`
}


func Register(c echo.Context) error {
	var req RegisterRequest

	if err := c.Bind(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid request format")
	}

	if req.Username == "" || req.Email == "" || req.Password == "" {
		return utils.RespondError(c, http.StatusBadRequest, echo.NewHTTPError(http.StatusBadRequest, "Missing required field"), "username, email, and password are required")
	}


	hashPassword , err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)

	if err != nil {
		return utils.RespondError(c, http.StatusInternalServerError, err, "Failed to hash password")
	}

	user := models.User{
		Username: req.Username,
		Email: req.Email,
		Password: string(hashPassword),
		Name: req.Name,
	}


}