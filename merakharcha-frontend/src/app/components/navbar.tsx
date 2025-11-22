"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">M</span>
            </div>
            <span className="hidden sm:inline">Merakharcha</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/groups" className="text-sm font-medium hover:text-primary transition-colors">
              Groups
            </Link>
            <Link href="/expenses" className="text-sm font-medium hover:text-primary transition-colors">
              Expenses
            </Link>
            <Link href="/reports" className="text-sm font-medium hover:text-primary transition-colors">
              Reports
            </Link>
            <Link href="/settle-up" className="text-sm font-medium hover:text-primary transition-colors">
              Settle Up
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground w-40"
              />
            </div>
            <Link href="/expenses/create">
              <Button size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Expense
              </Button>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
              >
                Account
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-10">
                  <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                    My Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                    Settings
                  </Link>
                  <Link href="/notifications" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                    Notifications
                  </Link>
                  <hr className="my-2 border-border" />
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/groups"
              className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
            >
              Groups
            </Link>
            <Link
              href="/expenses"
              className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
            >
              Expenses
            </Link>
            <Link
              href="/reports"
              className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
            >
              Reports
            </Link>
            <Link
              href="/settle-up"
              className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
            >
              Settle Up
            </Link>
            <hr className="my-2 border-border" />
            <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg transition-colors">
              My Profile
            </Link>
            <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg transition-colors">
              Settings
            </Link>
            <Link
              href="/notifications"
              className="block px-4 py-2 text-sm hover:bg-secondary rounded-lg transition-colors"
            >
              Notifications
            </Link>
            <div className="flex gap-2 pt-4">
              <Link href="/expenses/create" className="flex-1">
                <Button className="w-full gap-2" size="sm">
                  <Plus className="w-4 h-4" />
                  Add Expense
                </Button>
              </Link>
              <button className="flex-1 px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors">
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
