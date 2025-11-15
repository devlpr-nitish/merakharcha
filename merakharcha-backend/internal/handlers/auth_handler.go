package handlers

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/labstack/echo/v4"
	"net/http"
)

type RegisterRequest struct {
	Username string `json:"username" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required,min=6"`
	Name     string `json:"name"`
}

type LoginRequest struct {
	Identifier string `json:"identifier" validate:"required"`
	Password   string `json:"password" validate:"required,min=6"`
}

func Register(c echo.Context) error {
	var req RegisterRequest

	if err := c.Bind(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid request format")
	}

	if req.Username == "" || req.Email == "" || req.Password == "" {
		return utils.RespondError(c, http.StatusBadRequest, echo.NewHTTPError(http.StatusBadRequest, "Missing required field"), "username, email, and password are required")
	}

	user, err := services.RegisterUser(req.Username, req.Email, req.Password, req.Name)

	if err != nil {
		return utils.RespondError(c, http.StatusInternalServerError, err, "Registration failed")
	}

	return utils.RespondSuccess(c, http.StatusCreated, "user registered successfully", user)
}

func Login(c echo.Context) error {
	var req LoginRequest

	if err := c.Bind(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid request format")
	}

	if req.Identifier == "" || req.Password == "" {
		return utils.RespondError(c, http.StatusBadRequest, echo.NewHTTPError(http.StatusBadRequest, "Missing required field"), "username / email and password are required")
	}

	token, err := services.LoginUser(req.Identifier, req.Password)

	if err != nil {
		return utils.RespondError(c, http.StatusUnauthorized, err, "invalid username/email or password")
	}

	return utils.RespondSuccess(c, http.StatusOK, "user loggedin successfully", map[string]string{"token": token})
}
