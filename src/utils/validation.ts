export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class Validator {
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    
    if (!email) {
      errors.push('Email is required');
      return { isValid: false, errors };
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push('Invalid email format');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validatePassword(password: string): ValidationResult {
    const errors: string[] = [];
    
    if (!password) {
      errors.push('Password is required');
      return { isValid: false, errors };
    }
    
    if (password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/(?=.*\d)/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateField(value: any, rules: ValidationRule): ValidationResult {
    const errors: string[] = [];
    
    if (rules.required && !value) {
      errors.push('This field is required');
      return { isValid: false, errors };
    }
    
    if (value && rules.minLength && value.length < rules.minLength) {
      errors.push(`Minimum length is ${rules.minLength} characters`);
    }
    
    if (value && rules.maxLength && value.length > rules.maxLength) {
      errors.push(`Maximum length is ${rules.maxLength} characters`);
    }
    
    if (value && rules.pattern && !rules.pattern.test(value)) {
      errors.push('Invalid format');
    }
    
    if (value && rules.custom) {
      const customResult = rules.custom(value);
      if (typeof customResult === 'string') {
        errors.push(customResult);
      } else if (!customResult) {
        errors.push('Invalid value');
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
} 