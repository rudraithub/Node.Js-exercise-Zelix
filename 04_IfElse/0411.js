
    if (typeof char !== 'string' || char.length !== 1) {
      throw new Error('Invalid input. Please enter a single character.');
    }
  
    const lowerChar = char.toLowerCase();  
    const vowels = 'aeiou';
    return vowels.includes(lowerChar);  
  