import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
    {service: 'keycloak'},
    {
        $set: {
            "realm": "dcm4che",
            "auth-server-url": "https://dockerhost:8843/auth",
            "auth_redirect_uri": "/studylist",
            "ssl-required": "none", //"external",
            "resource": "ohif-viewer",
            "client_id": "ohif-viewer",
            "public-client": false,
            "loginStyle": 'popup',
            "use-resource-role-mappings": false,
            "bearer-only": false,
            "secret": '822d7f77-d6fb-40e2-80e4-b99bb3dc6aca',
            "realm-public-key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlmO8/oyDelHFNVZrtlvDjCnN0U6r2PaiYbTl8ytyZizq8FXB4LrwmgWsprojDRMauwzST0AUNE8dC1jJ89CoGAveNhrnCkMVzuXy0mMZt82HHDqDLGY1AKfLD756CuuTmt69ul2OTqpk5uIi8v7cdtaqIFdCRYzqSIJ6jMfJ+nk6FuEd2bBAUoAbHwAljcxeRV8ho7nWKEe1g8ZkYEqUIKYhfaLx36Q7VxDNOdmSpdpzKdoWSURGPFuTOKekg2Tuqgv9M40ceK9konDktZplbwh7TXZOJy9gC6LlU3kosBbtIP+RWtdwcbdU7BZJx1zTOroA0hyRPDTQBR4Nkm5kvwIDAQAB"
        }
    }
);
