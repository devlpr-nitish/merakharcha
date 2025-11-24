package services

import (
	"errors"

	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
)

type UserConnectionService struct {
	Repo *repository.UserConnectionRepository
}

func NewUserConnectionService(repo *repository.UserConnectionRepository) *UserConnectionService {
	return &UserConnectionService{Repo: repo}
}

func (s *UserConnectionService) AddConnection(userID uint, otherUser uint) error {
	if userID == otherUser {
		return errors.New("cannot connect to yourself")
	}

	exists, err := s.Repo.CheckConnection(userID, otherUser)
	if err != nil {
		return err
	}

	if exists {
		return errors.New("connection already exists")
	}

	conn := &models.UserConnection{
		UserID:    userID,
		OtherUser: otherUser,
	}

	return s.Repo.AddConnection(conn)
}

func (s *UserConnectionService) GetConnections(userID uint) ([]models.UserConnection, error) {
	return s.Repo.GetConnections(userID)
}

func (s *UserConnectionService) DeleteConnection(userID uint, otherUser uint) error {
	return s.Repo.DeleteConnection(userID, otherUser)
}
