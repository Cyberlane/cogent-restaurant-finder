import { describe, expect, it } from 'vitest';
import { joinUrl } from '../utils/url';

describe('joinUrl', () => {
  it('should join two simple paths', () => {
    expect(joinUrl('http://example.com', 'foo')).toBe('http://example.com/foo');
  });

  it('should handle trailing slash in base', () => {
    expect(joinUrl('http://example.com/', 'foo')).toBe(
      'http://example.com/foo',
    );
  });

  it('should handle leading slash in path', () => {
    expect(joinUrl('http://example.com', '/foo')).toBe(
      'http://example.com/foo',
    );
  });

  it('should handle both trailing and leading slashes', () => {
    expect(joinUrl('http://example.com/', '/foo')).toBe(
      'http://example.com/foo',
    );
  });
});
