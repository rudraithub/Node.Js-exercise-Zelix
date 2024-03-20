

    if (typeof year !== 'number' || year <= 0) {
      throw new Error('Invalid year. Please enter a positive integer.');
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  