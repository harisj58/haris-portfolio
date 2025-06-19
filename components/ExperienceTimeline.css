.experience-timeline {
    position: relative;
    padding: 1rem 0;
}

.timeline-line-main {
    position: absolute;
    left: 0.75rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #34D399, rgba(52, 211, 153, 0.3));
    z-index: 0;
}

.timeline-item {
    position: relative;
    padding-left: 3rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
}

.timeline-item:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.timeline-dot-main {
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #34D399;
    border-radius: 50%;
    border: 3px solid rgba(17, 24, 39, 1);
    z-index: 1;
    box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.1);
    transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot-main {
    background-color: #10B981;
    box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.2);
    transform: scale(1.1);
}

.timeline-content {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 12px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.timeline-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
            rgba(52, 211, 153, 0.03) 0%,
            rgba(52, 211, 153, 0.01) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.timeline-content:hover::before {
    opacity: 1;
}

.timeline-content:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
    box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.15);
}

.experience-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
}

.company-logo-timeline {
    width: 50px;
    height: 50px;
    object-fit: contain;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 0.5rem;
    flex-shrink: 0;
}

.experience-info {
    flex: 1;
}

.experience-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.experience-company {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #34D399;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
}

.timeline-content:hover .experience-company {
    color: #10B981;
}

.experience-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    color: #9CA3AF;
}

.experience-meta-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.experience-description {
    color: #D1D5DB;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.experience-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-bottom: 1rem;
}

.experience-skill-tag {
    padding: 0.15rem 0.5rem;
    border-radius: 9999px;
    background-color: rgba(52, 211, 153, 0.15);
    color: #34D399;
    font-size: 0.65rem;
    font-family: 'Fira Code', monospace;
    border: 1px solid rgba(52, 211, 153, 0.15);
    transition: all 0.3s ease;
}

.experience-skill-tag:hover {
    background-color: rgba(52, 211, 153, 0.25);
    transform: translateY(-1px);
}

.experience-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.experience-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #34D399;
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.4rem 0.8rem;
    border-radius: 0.375rem;
    border: 1px solid rgba(52, 211, 153, 0.2);
    background-color: rgba(52, 211, 153, 0.05);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
}

.experience-link:hover {
    background-color: rgba(52, 211, 153, 0.15);
    border-color: rgba(52, 211, 153, 0.4);
    transform: translateX(4px);
    gap: 0.75rem;
    box-shadow: 0 4px 8px rgba(52, 211, 153, 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
    .timeline-item {
        padding-left: 2.5rem;
        margin-bottom: 2rem;
    }

    .timeline-line-main {
        left: 0.625rem;
    }

    .timeline-dot-main {
        left: 0;
        width: 1.25rem;
        height: 1.25rem;
    }

    .timeline-content {
        padding: 1.25rem;
    }

    .experience-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .company-logo-timeline {
        width: 40px;
        height: 40px;
        align-self: flex-start;
    }

    .experience-title {
        font-size: 1rem;
    }

    .experience-company {
        font-size: 0.9rem;
    }

    .experience-meta {
        flex-direction: column;
        gap: 0.5rem;
    }

    .experience-skills {
        gap: 0.25rem;
    }

    .experience-skill-tag {
        font-size: 0.6rem;
        padding: 0.1rem 0.4rem;
    }
}

@media (max-width: 480px) {
    .timeline-item {
        padding-left: 2rem;
    }

    .timeline-line-main {
        left: 0.5rem;
    }

    .timeline-dot-main {
        left: 0;
        width: 1rem;
        height: 1rem;
    }

    .timeline-content {
        padding: 1rem;
    }

    .experience-title {
        font-size: 0.95rem;
    }

    .experience-company {
        font-size: 0.85rem;
    }

    .experience-link {
        padding: 0.35rem 0.7rem;
        font-size: 0.75rem;
    }
}