const cep = require('./cep');

test('Testando buscar cep', async () => {
    // Arrange
    const myCep = "62360000";

    // Act
    const response = await cep.searchCep(myCep);

    // Assert
    expect(response.cep).toBe("62360-000");
    expect(response.localidade).toBe("Ibiapina");
    expect(response.uf).toBe("CE");
});

test('Testando buscar cep nulo', async () => {
    // Arrange
    const myCep = "";

    // Act
    const response = await cep.searchCep(myCep);

    // Assert
    expect(response).toStrictEqual({});
});