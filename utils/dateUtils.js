// Utility functions for calculating duration between dates
export const parseDuration = (durationString) => {
  // Handle various duration formats like "Jun 2024 - May 2025", "Jan 2024 - Present", etc.
  const parts = durationString.split(' - ');
  if (parts.length !== 2) return null;
  
  const [startStr, endStr] = parts;
  const startDate = parseDate(startStr.trim());
  const endDate = endStr.trim().toLowerCase() === 'present' ? new Date() : parseDate(endStr.trim());
  
  if (!startDate || !endDate) return null;
  
  return { startDate, endDate };
};

export const parseDate = (dateString) => {
  // Parse formats like "Jun 2024", "January 2024", etc.
  const months = {
    'jan': 0, 'january': 0,
    'feb': 1, 'february': 1,
    'mar': 2, 'march': 2,
    'apr': 3, 'april': 3,
    'may': 4,
    'jun': 5, 'june': 5,
    'jul': 6, 'july': 6,
    'aug': 7, 'august': 7,
    'sep': 8, 'september': 8,
    'oct': 9, 'october': 9,
    'nov': 10, 'november': 10,
    'dec': 11, 'december': 11
  };
  
  const parts = dateString.toLowerCase().split(' ');
  if (parts.length !== 2) return null;
  
  const monthName = parts[0];
  const year = parseInt(parts[1]);
  
  if (months[monthName] === undefined || isNaN(year)) return null;
  
  return new Date(year, months[monthName], 1);
};

export const calculateDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return null;
  
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months };
};

export const formatDuration = (duration) => {
  if (!duration) return '';
  
  const { years, months } = duration;
  const parts = [];
  
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }
  
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }
  
  if (parts.length === 0) {
    return 'Less than 1 month';
  }
  
  return parts.join(' ');
};

export const getDurationFromString = (durationString) => {
  const parsed = parseDuration(durationString);
  if (!parsed) return null;
  
  const duration = calculateDuration(parsed.startDate, parsed.endDate);
  return duration;
};

export const getTotalCompanyDuration = (experiences) => {
  // Calculate total time across all roles at a company
  // Handle gaps and overlaps properly
  const dateRanges = [];
  
  experiences.forEach(exp => {
    const parsed = parseDuration(exp.duration);
    if (parsed) {
      dateRanges.push(parsed);
    }
  });
  
  if (dateRanges.length === 0) return null;
  
  // Sort by start date
  dateRanges.sort((a, b) => a.startDate - b.startDate);
  
  // Merge overlapping ranges
  const mergedRanges = [];
  let current = dateRanges[0];
  
  for (let i = 1; i < dateRanges.length; i++) {
    const next = dateRanges[i];
    
    if (next.startDate <= current.endDate) {
      // Overlapping or adjacent ranges - merge them
      current.endDate = new Date(Math.max(current.endDate, next.endDate));
    } else {
      // Non-overlapping range - add current to merged and start new
      mergedRanges.push(current);
      current = next;
    }
  }
  mergedRanges.push(current);
  
  // Calculate total duration from merged ranges
  let totalYears = 0;
  let totalMonths = 0;
  
  mergedRanges.forEach(range => {
    const duration = calculateDuration(range.startDate, range.endDate);
    if (duration) {
      totalYears += duration.years;
      totalMonths += duration.months;
    }
  });
  
  // Normalize months to years
  totalYears += Math.floor(totalMonths / 12);
  totalMonths = totalMonths % 12;
  
  return { years: totalYears, months: totalMonths };
};