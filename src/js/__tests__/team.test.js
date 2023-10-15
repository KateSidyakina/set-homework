import Team from '../Team';

test('check Character error type', () => {
  const team = new Team();
  team.add('Даня');
  expect(() => {
    team.add('Даня');
  }).toThrow('Такой персонаж уже есть в команде');
});

test('addAll test', () => {
  const team = new Team();
  team.addAll('Даня', 'Катя', 'Гоша');
  const expected = new Set();
  expected.add('Даня');
  expected.add('Катя');
  expected.add('Гоша');
  expect(team.members).toEqual(expected);
});

test('to Array', () => {
  const team = new Team();
  team.addAll('Даня', 'Катя', 'Гоша');
  const expected = ['Даня', 'Катя', 'Гоша'];
  expect(team.toArray()).toEqual(expected);
});
