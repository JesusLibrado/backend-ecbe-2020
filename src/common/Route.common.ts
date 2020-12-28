import express from 'express';
export abstract class CommonRoutesConfig {
    private App: express.Application;
    private Name: string;
    private BasePath: string;

    constructor(app: express.Application, routeName: string, path: string) {
        this.App = app;
        this.Name = routeName;
        this.BasePath = path;
    }

    get name(): string {
        return this.Name;
    }

    get app(): express.Application {
        return this.App;
    }

    get basePath(): string {
        return this.BasePath;
    }

    abstract getRouter(): express.Router;
}
