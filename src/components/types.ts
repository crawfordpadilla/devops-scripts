// types.ts

export interface DeploymentConfig {
    environment: string;
    region: string;
    version: string;
    replicas: number;
    autoScaling: {
        enabled: boolean;
        minReplicas: number;
        maxReplicas: number;
    };
    resources: {
        cpu: string;
        memory: string;
    };
}

export interface ServiceConfig {
    name: string;
    port: number;
    protocol: 'http' | 'https' | 'tcp';
    healthCheckPath?: string;
    timeout?: number;
}

export interface InfrastructureConfig {
    provider: 'aws' | 'azure' | 'gcp';
    network: {
        vpcId: string;
        subnetIds: string[];
        securityGroupIds: string[];
    };
    storage: {
        bucketName: string;
        accessKeyId: string;
        secretAccessKey: string;
    };
}

export interface DevOpsScriptsConfig {
    deployment: DeploymentConfig;
    service: ServiceConfig;
    infrastructure: InfrastructureConfig;
}

export type EnvVariable = {
    key: string;
    value: string;
    secret?: boolean;
};

export type Command = {
    name: string;
    description: string;
    command: string;
    args?: string[];
};

export interface ScriptConfig {
    envVariables: EnvVariable[];
    commands: Command[];
}