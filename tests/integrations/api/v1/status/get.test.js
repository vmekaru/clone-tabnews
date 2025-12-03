test("GET to /api/v1/status returns 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status")
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.updated_at).toBeDefined();
    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toBe(parsedUpdatedAt);
    
    expect(responseBody.dependencies.database.version).toBeDefined();
    const versionRegex = /^v?\d+\.\d+(\.\d+)?$/;
    expect(versionRegex.test(responseBody.dependencies.database.version)).toBe(true);
    expect(responseBody.dependencies.database.version).toBe('16.0');

    expect(responseBody.max_connections).toBeDefined();
    expect(typeof responseBody.max_connections).toBe("number");
    expect(responseBody.max_connections).toBeGreaterThan(0);

    expect(responseBody.used_connections).toEqual(1);
})