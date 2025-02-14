const PatientAccess = artifacts.require("PatientAccess");

contract("PatientAccess", (accounts) => {
    const [patient, doctor1, doctor2] = accounts;

    it("should set the correct patient on deployment", async () => {
        const instance = await PatientAccess.new(patient);
        const owner = await instance.patient();
        assert.equal(owner, patient, "The patient address is incorrect");
    });

    it("should allow the patient to grant access", async () => {
        const instance = await PatientAccess.new(patient);
        await instance.grantAccess(doctor1, { from: patient });
        const isAuthorized = await instance.isAuthorized(doctor1);
        assert.isTrue(isAuthorized, "Doctor1 should have access");
    });

    it("should allow the patient to revoke access", async () => {
        const instance = await PatientAccess.new(patient);
        await instance.grantAccess(doctor1, { from: patient });
        await instance.revokeAccess(doctor1, { from: patient });
        const isAuthorized = await instance.isAuthorized(doctor1);
        assert.isFalse(isAuthorized, "Doctor1 access should have been revoked");
    });

    it("should not allow unauthorized users to add records", async () => {
        const instance = await PatientAccess.new(patient);
        try {
            await instance.addRecord("hash123", "description", { from: doctor2 });
            assert.fail("Unauthorized user should not be able to add records");
        } catch (error) {
            assert.include(error.message, "Not authorized", "Expected 'Not authorized' error");
        }
    });
});
