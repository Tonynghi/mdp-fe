/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './features/~__root';
import { Route as IndexImport } from './features/~index';
import { Route as Feature1IdImport } from './features/~feature1/~$id';
import { Route as Feature1IndexImport } from './features/~feature1/~index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const Feature1IdRoute = Feature1IdImport.update({
  id: '/feature1/$id',
  path: '/feature1/$id',
  getParentRoute: () => rootRoute,
} as any);

const Feature1IndexRoute = Feature1IndexImport.update({
  id: '/feature1/',
  path: '/feature1/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/feature1/': {
      id: '/feature1/';
      path: '/feature1';
      fullPath: '/feature1';
      preLoaderRoute: typeof Feature1IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/feature1/$id': {
      id: '/feature1/$id';
      path: '/feature1/$id';
      fullPath: '/feature1/$id';
      preLoaderRoute: typeof Feature1IdImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/feature1': typeof Feature1IndexRoute;
  '/feature1/$id': typeof Feature1IdRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/feature1': typeof Feature1IndexRoute;
  '/feature1/$id': typeof Feature1IdRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/feature1/': typeof Feature1IndexRoute;
  '/feature1/$id': typeof Feature1IdRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/feature1' | '/feature1/$id';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/feature1' | '/feature1/$id';
  id: '__root__' | '/' | '/feature1/' | '/feature1/$id';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  Feature1IndexRoute: typeof Feature1IndexRoute;
  Feature1IdRoute: typeof Feature1IdRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  Feature1IndexRoute: Feature1IndexRoute,
  Feature1IdRoute: Feature1IdRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "~__root.tsx",
      "children": [
        "/",
        "/feature1/",
        "/feature1/$id"
      ]
    },
    "/": {
      "filePath": "~index.tsx"
    },
    "/feature1/": {
      "filePath": "~feature1/~index.tsx"
    },
    "/feature1/$id": {
      "filePath": "~feature1/~$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
