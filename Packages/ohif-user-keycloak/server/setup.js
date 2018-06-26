import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
    {service: 'keycloak'},
    {
        $set: {
            "realm": "dcm4che",
            "auth-server-url": "https://dockerhost:8843/auth",
            "ssl-required": "external",
            "resource": "ohif-viewer",
            "public-client": false,
            "use-resource-role-mappings": true,
            "bearer-only": true,
            "realm-public-key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlmO8/oyDelHFNVZrtlvDjCnN0U6r2PaiYbTl8ytyZizq8FXB4LrwmgWsprojDRMauwzST0AUNE8dC1jJ89CoGAveNhrnCkMVzuXy0mMZt82HHDqDLGY1AKfLD756CuuTmt69ul2OTqpk5uIi8v7cdtaqIFdCRYzqSIJ6jMfJ+nk6FuEd2bBAUoAbHwAljcxeRV8ho7nWKEe1g8ZkYEqUIKYhfaLx36Q7VxDNOdmSpdpzKdoWSURGPFuTOKekg2Tuqgv9M40ceK9konDktZplbwh7TXZOJy9gC6LlU3kosBbtIP+RWtdwcbdU7BZJx1zTOroA0hyRPDTQBR4Nkm5kvwIDAQAB"
        }
    }
);
