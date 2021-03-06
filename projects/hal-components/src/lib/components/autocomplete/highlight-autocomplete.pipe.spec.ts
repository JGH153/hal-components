import { HighlightAutocomplete } from './highlight-autocomplete.pipe';

describe('Pipe: HighlightAutocomplete1e', () => {
  it('create an instance', () => {
    const pipe = new HighlightAutocomplete();
    expect(pipe).toBeTruthy();
  });

  it('returns option with matching search term in bold', () => {
    const option = 'Elvia';
    const searchTerm = 'elv';
    const pipe = new HighlightAutocomplete();
    const result = pipe.transform(option, searchTerm);
    expect(result).toBe('<b>Elv</b>ia');
  });

  it('returns option with all matching search terms', () => {
    const option = 'Elvia Hafslund elvia';
    const searchTerm = 'elv';
    const pipe = new HighlightAutocomplete();
    const result = pipe.transform(option, searchTerm);
    expect(result).toBe('<b>Elv</b>ia Hafslund <b>elv</b>ia');
  });

  it('returns option without any highlight when searchterm does not match', () => {
    const option = 'Elvia';
    const searchTerm = 'elvis';
    const pipe = new HighlightAutocomplete();
    const result = pipe.transform(option, searchTerm);
    expect(result).toBe('Elvia');
  });
});
