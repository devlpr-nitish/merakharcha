package handlers

import (
	"net/http"

	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/labstack/echo/v4"
)



func Welcome(c echo.Context) error{
	return utils.RespondSuccess(c, http.StatusOK, "Welcome to the merakharcha api", "Hello");
}