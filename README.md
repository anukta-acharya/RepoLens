# RepoLens

## Intelligent GitHub Repository Analysis Platform

RepoLens is a modern repository intelligence and analytics platform that provides real-time insights into GitHub repositories through an elegant and interactive interface.

The application enables users to analyze repository activity, architecture indicators, project statistics, and repository metadata instantly using the GitHub API.

Built with a modern full-stack architecture, RepoLens combines a responsive React frontend with a lightweight Node.js backend to deliver a fast, visually polished, and developer-friendly experience.

---
## Link 
https://repo-lens-two.vercel.app/

# Project Overview

RepoLens was designed to simplify repository exploration and improve the way developers understand open-source projects.

Instead of manually navigating through GitHub pages, users can simply paste a repository URL and instantly receive a structured analysis dashboard.

The platform focuses on:

- Repository intelligence
- Development activity insights
- Real-time GitHub analytics
- Developer productivity
- Modern user experience

---

# Features

## Real-Time GitHub Repository Analysis

Analyze public GitHub repositories instantly using the GitHub REST API.

## Repository Metadata Extraction

RepoLens automatically extracts:

- Repository name
- Description
- Primary programming language
- Star count
- Fork count
- Open issues
- Last commit activity

## Modern Interactive UI

The platform includes:

- Glassmorphism interface
- Animated transitions using Framer Motion
- Professional gradient styling
- Responsive layout
- Background visual enhancements

## Fast and Lightweight Backend

The Express.js backend efficiently handles:

- GitHub API requests
- Repository parsing
- Error handling
- JSON response management

## Dynamic Results Dashboard

Repository data is displayed in an elegant analytics card layout for quick understanding and improved readability.

---

# Technology Stack

## Frontend

- React.js
- React Router DOM
- Framer Motion
- CSS Inline Styling

## Backend

- Node.js
- Express.js
- Axios
- CORS

## API

- GitHub REST API

---

# Application Architecture

## Frontend Flow

1. User enters a GitHub repository URL
2. React frontend sends request to backend API
3. Backend processes repository information
4. GitHub API data is fetched
5. Processed analytics are returned to frontend
6. Results dashboard is rendered dynamically

## Backend Flow

1. Receive repository URL
2. Parse owner and repository name
3. Fetch repository data from GitHub API
4. Structure response data
5. Return formatted JSON response

---

# User Interface Highlights

## Analyze Repository Page

The Analyze page includes:

- Large centered repository input
- Professional glassmorphism card design
- Background imagery and overlay effects
- Smooth animations and hover interactions
- Responsive alignment

## Results Dashboard

The Results page provides:

- Structured repository analytics
- Interactive statistics cards
- Last commit tracking
- Elegant visual hierarchy
- Improved readability and spacing

---

# IBM Bob Integration

IBM Bob was used as an AI-powered development partner throughout the project workflow.

## How IBM Bob Assisted

- UI enhancement suggestions
- Repository analysis workflow improvements
- Backend debugging support
- API integration refinement
- Frontend component optimization
- Rapid issue resolution
- Development acceleration

The project demonstrates how AI-assisted development can significantly improve productivity, reduce repetitive debugging effort, and accelerate software delivery.

---

# Installation Guide

## Clone the Repository

```bash
git clone https://github.com/anukta.acharya/RepoLens.git
