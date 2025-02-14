const RecordStorage = artifacts.require("RecordStorage");

contract("RecordStorage", (accounts) => {
    const [owner, doctor1] = accounts;

    it("should add a new record", async () => {
        const instance = await RecordStorage.new();
        await instance.addRecord("hash123", "Test File", "Test Description", { from: owner });
        const record = await instance.getRecord(1);
        assert.equal(record.recordHash, "hash123", "Record hash is incorrect");
        assert.equal(record.fileName, "Test File", "File name is incorrect");
    });

    it("should allow the owner to grant access", async () => {
        const instance = await RecordStorage.new();
        await instance.addRecord("hash123", "Test File", "Test Description", { from: owner });
        await instance.grantAccess(1, doctor1, { from: owner });
        const isAuthorized = await instance.isAuthorized(1, doctor1);
        assert.isTrue(isAuthorized, "Doctor1 should have access to the record");
    });

    it("should allow the owner to revoke access", async () => {
        const instance = await RecordStorage.new();
        await instance.addRecord("hash123", "Test File", "Test Description", { from: owner });
        await instance.grantAccess(1, doctor1, { from: owner });
        await instance.revokeAccess(1, doctor1, { from: owner });
        const isAuthorized = await instance.isAuthorized(1, doctor1);
        assert.isFalse(isAuthorized, "Doctor1 access should have been revoked");
    });
});
