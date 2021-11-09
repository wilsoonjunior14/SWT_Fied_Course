const calculator = require('./calculator');

test('Testando a soma entre dois números', () => {
    // Arrange
    var a = 1;
    var b = 1;

    // Act
    var sumResults = calculator.sum(a, b);

    // Assert
    expect(sumResults).toBe(2);
});

test('Somando dois números, 1 + 10 = 11', () => {
    var sumResults = calculator.sum(1, 10);

    expect(sumResults).toBe(11);
});

test('Diferença entre dois números, 1 - 1 = 0', () => {
    var sumResults = calculator.diff(1, 1);

    expect(sumResults).toBe(0);
});

test('Raiz quadrada de numero negativo', () => {
    var results = calculator.sqrt(-16);

    expect(results).toBe(NaN);
});