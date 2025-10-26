package models

import "time"

type Expense struct {
	ID          uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	GroupID     *uint     `json:"group_id"`
	Title       string    `json:"title" gorm:"not null"`
	Amount      float64   `json:"amount" gorm:"not null"`
	PaidBy      uint      `json:"paid_by" gorm:"not null"`
	SplitType   string    `json:"split_type" gorm:"not null"`
	Description string    `json:"description"`
	Date        time.Time `json:"date"`
	CreatedAt   time.Time `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   time.Time `json:"updated_at" gorm:"autoUpdateTime"`

	Participants []ExpenseParticipant `json:"participants"`
}
