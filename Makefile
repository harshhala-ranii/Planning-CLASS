# Makefile for Class Planning Application

# Docker commands
.PHONY: docker-up docker-down docker-rebuild

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-rebuild:
	docker-compose up --build -d

# Backend commands
.PHONY: backend-install backend-run backend-clean

backend-install:
	cd backend && python -m venv venv && . venv/bin/activate && pip install -r requirements.txt

backend-run:
	cd backend && . venv/bin/activate && python main.py

backend-clean:
	rm -rf backend/venv

# Frontend commands
.PHONY: frontend-install frontend-run frontend-clean

frontend-install:
	cd frontend && npm install

frontend-run:
	cd frontend && npm start

frontend-clean:
	rm -rf frontend/node_modules

# Clean all
.PHONY: clean-all

clean-all: backend-clean frontend-clean

# Help
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  docker-up         Start all services with Docker Compose (detached)"
	@echo "  docker-down       Stop all Docker Compose services"
	@echo "  docker-rebuild    Rebuild and start all services with Docker Compose"
	@echo "  backend-install   Set up backend Python venv and install dependencies"
	@echo "  backend-run       Run the backend FastAPI server (venv must be activated)"
	@echo "  backend-clean     Remove backend virtual environment"
	@echo "  frontend-install  Install frontend npm dependencies"
	@echo "  frontend-run      Run the frontend React development server"
	@echo "  frontend-clean    Remove frontend node_modules"
	@echo "  clean-all         Remove all build artifacts (backend venv, frontend node_modules)" 