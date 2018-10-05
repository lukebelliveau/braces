const braces = require('../src/braces');

describe('braces', () => {
  describe('straightforward balanced braces', () => {
    it('returns -1 on empty string', () => {
      const result = braces('');
      expect(result).toBe(-1);
    });

    it('returns -1 on one pair of balanced braces', () => {
      const result = braces('{}');
      expect(result).toBe(-1);
    });

    it('returns -1 on two pairs of balanced braces', () => {
      const result = braces('{{}}');
      expect(result).toBe(-1);
    });

    it('returns -1 on 10 pairs of balanced braces', () => {
      const result = braces('{{{{{{{{{{}}}}}}}}}}');
      expect(result).toBe(-1);
    });

    it('returns -1 on sequential pairs of balanced braces', () => {
      const result = braces('{}{}{}{}{}');
      expect(result).toBe(-1);
    })

    it('returns -1 on interwoven balanced braces', () => {
      const result = braces('{{{}{{}}}}');
      expect(result).toBe(-1);
    })
  })

  describe('straightforward unbalanced braces', () => {
    it('returns 0 on a lone opening brace', () => {
      const result = braces('{');
      expect(result).toBe(0);
    });

    it('returns 0 on a lone closing brace', () => {
      const result = braces('}');
      expect(result).toBe(0);
    });

    it('returns the first index if there is one extra opening brace', () => {
      const result = braces('{{{{{}}}}');
      expect(result).toBe(0);
    });

    it('returns the last index if there is one extra closing brace', () => {
      const result = braces('{{{{}}}}}');
      expect(result).toBe(8);
    })
  })

  describe('given test cases', () => {
    it('returns -1 on provided balanced test cases', () => {
      const testCases = [
        'hello world',
        '{}',
        '{{{foo();}}}{}',
        '{{}{}}',
      ]

      let results = [];

      testCases.forEach(testCase => {
        results.push(braces(testCase))
      })

      results.forEach(result => expect(result).toBe(-1))
    })

    it('returns correct result on unbalanced test cases', () => {
      const result1 = braces('{{{}');
      const result2 = braces('}');
      const result3 = braces('{}{foo{}');

      expect(result1).toBe(0);
      expect(result2).toBe(0);
      expect(result3).toBe(2);
    })
  })
})