package models

import "time"

type UserConnection struct {
	ID        uint      `gorm:"primaryKey;autoIncrement"`
	UserID    uint      `json:"user_id"`
	OtherUser uint      `json:"other_user"`
	CreatedAt time.Time `json:"created_at" gorm:"autoCreateTime"`
}
