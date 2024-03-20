
    if (typeof char !== 'string' || char.length !== 1) {
      throw new Error('Invalid input. Please enter a single character.');
    }
  
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);  
  
