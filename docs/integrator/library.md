# KGrid Library

## Running the Library

Download the latest library jar from GitHub [Latest Activator Release](https://github.com/kgrid/kgrid-library/releases/latest).

1. Create a _library_ directory
1. Download [kgrid-library-#.#.#.jar](https://github.com/kgrid/kgrid-library/releases/latest)  
1. Place the _kgrid-library-#.#.#.jar_ into the _library_
1. Create a directory named _shelf_ in the new _library_ directory

Directory structure should look similar to the following

```text
 └── library
     └── shelf  
     └── kgrid-library-#.#.#.jar
```

The library is executable jar and can be run from the command line.  Open a terminal window and navigate to the directory where the jar and shelf are located.  

Type in the following.

```bash
 java -jar kgrid-library-#.#.#.jar
```

By default the activator will run  on port 8080. You can validate the activator is up and running using
the [library health endpoint](http://localhost:8080/health).  The health of the Library should display a status of **UP**.  

```json
{
  "status": "UP",
  "components": {
    "db": {
      "status": "UP",
      "details": {
        "database": "H2",
        "validationQuery": "isValid()"
      }
    },
    "diskSpace": {
      "status": "UP",
      "details": {
        "total": 499514339328,
        "free": 28116086784,
        "threshold": 10485760,
        "exists": true
      }
    },
    "ping": {
      "status": "UP"
    },
    "shelf": {
      "status": "UP",
      "details": {
        "numberOfKOs": 0,
        "kgrid.shelf.cdostore.url": "/shelf"
      }
    },
    "userDetailService": {
      "status": "UP",
      "details": {
        "number of users": 2
      }
    }
  }
}

```
Now simply navigate to the [KGrid Library](http://localhost:8080).

## Configuration
There are several settings that you can control on the Library.

**Library Knowledge Object Shelf Location**

By default the activator will look for a _shelf_ in jar execution directory but the location the _shelf_ can be configured:

```bash
java -jar kgrid-library-1.3.1.jar --kgrid.shelf.cdostore.url=filesystem:file:///data/myshelf

java -jar kgrid-library-1.3.1.jar --kgrid.shelf.cdostore.url=filesystem:file:///c:/Users/me/myshelf
```

**Library Server Port** 

To change the port:

```java -jar kgrid-library-1.3.1.jar --server.port=9090```


