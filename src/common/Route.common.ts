import express from 'express';
export abstract class CommonRoutesConfig {
    private App: express.Application;
    private Name: string;

    constructor(app: express.Application, routeName: string) {
        this.App = app;
        this.Name = routeName;
        this.configureRoutes();
    }

    get name(): string {
        return this.Name;
    }

    get app(): express.Application {
        return this.App;
    }

    abstract configureRoutes(): express.Application;
}
