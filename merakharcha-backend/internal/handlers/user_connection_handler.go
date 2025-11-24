package handlers

import (
	"net/http"
	"strconv"

	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/labstack/echo/v4"
)

type UserConnectionHandler struct {
	Service *services.UserConnectionService
}

func NewUserConnectionHandler(s *services.UserConnectionService) *UserConnectionHandler {
	return &UserConnectionHandler{Service: s}
}


func (h *UserConnectionHandler) AddConnection(c echo.Context) error {
	userID := c.Get("user_id").(uint)

	otherUser, err := strconv.Atoi(c.Param("other_user"))
	if err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid user ID")
	}

	if err := h.Service.AddConnection(userID, uint(otherUser)); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Failed to add connection")
	}

	return utils.RespondSuccess(c, http.StatusCreated, "Connection added successfully", nil)
}


func (h *UserConnectionHandler) GetConnections(c echo.Context) error {
	userID := c.Get("user_id").(uint)

	list, err := h.Service.GetConnections(userID)
	if err != nil {
		return utils.RespondError(c, http.StatusInternalServerError, err, "Failed to fetch connections")
	}

	return utils.RespondSuccess(c, http.StatusOK, "Connections fetched successfully", list)
}


func (h *UserConnectionHandler) DeleteConnection(c echo.Context) error {
	userID := c.Get("user_id").(uint)
	
	otherUser, err := strconv.Atoi(c.Param("other_user"))
	if err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid user ID")
	}

	if err := h.Service.DeleteConnection(userID, uint(otherUser)); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Failed to delete connection")
	}

	return utils.RespondSuccess(c, http.StatusOK, "Connection deleted successfully", nil)
}
