package services

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
)

type GroupService struct {
	Repo *repository.GroupRepository
}

func NewGroupService(repo *repository.GroupRepository) *GroupService {
	return &GroupService{Repo: repo}
}

func (s *GroupService) CreateGroup(group *models.Group) error {

	return s.Repo.Create(group)
}
