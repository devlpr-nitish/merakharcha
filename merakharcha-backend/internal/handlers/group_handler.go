package handlers

import (
	"net/http"

	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/labstack/echo/v4"
)



type GroupHandler struct {
	Service *services.GroupService
}

func NewGroupHandler(s *services.GroupService) *GroupHandler {
	return &GroupHandler{Service: s}
}

func (h *GroupHandler) CreateGroup(c echo.Context) error {
	var req models.Group

	if err := c.Bind(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Invalid request data")
	}

	if err := h.Service.CreateGroup(&req); err != nil {
		return utils.RespondError(c, http.StatusBadRequest, err, "Failed to create group")
	}

	return utils.RespondSuccess(c, http.StatusCreated, "Group Created successfully", req)
}