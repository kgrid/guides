# KO Service OpenAPI

KO Service interfaces are describe using the [OpenAPI](https://github.com/OAI/OpenAPI-Specification) specification.  This specification defines the path(s) to the service, the request and response scheme and much more.  Here we will briefly describe the minimal information needed to describe a KO Service.  You can write OpenAPI definitions in YAML or JSON, our templates in KGrid CLI and our examples all use the YAML format, we found the format easier.  

## Structure
The following describes the basic structure of OpenAPI 3.0 definition. We will use the [Cardiovascular Risk Calculation KO v0.3.0](http://activator.kgrid.org/kos/score/calc/v0.3.0/service) OpenAPI 3.0 definition for this example.


### Metadata
Define the version of the OpenAPI Specification and basic information about this API
```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: SCORE risk calculation v0.3.0
  description: SCORE risk calculation v0.3.0.
  ...
```  

### Servers
The servers section specifies the API server and base URL. for KO Services we use the [Archival Resource Key](https://en.wikipedia.org/wiki/Archival_Resource_Key) (ark id) which is naan/name.  Using the ark id ensures the paths are unique. 
```yaml

...

servers:
  - url: /score/calc
    description: SCORE risk calculation.
```

### Paths
The paths section defines individual endpoints (paths) in your API.  Currently KO Service activation support the _POST_ HTTP method.
```yaml

...

paths:
  /score:
    post:
      tags:
        - KO Endpoints
      description: SCORE risk calculation.
      operationId: cvdriskscore

```
### Request Body
The requestBody keyword describes the body content and media type. KO Service use json inputs.  The json format is defined in the _input_ scheme components section of the  definition.
```yaml

...

      requestBody:
        description: inputs
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/input'
 ```

Here is the _input_ json definition with type and examples.

```yaml

...

components:
  schemas:
    input:
      required:
        - age
        - gender
        - risk
        - sbp
        - cholesterol
        - smoker
      properties:
        age:
          type: number
          example: 48
        gender:
          type: string
          enum:
            - Male
            - Female
          example: Female
        risk:
          type: string
          enum:
            - high
            - low
          example: low
        sbp:
          type: number
          example: 120
        cholesterol:
          type: number
          example: 8
        smoker:
          type: boolean
          example: false
```
### Responses
To response definition is categorized by status code.  The content defines the type and format via a scheme _output_.

```yaml

...

      responses:
        '200':
          description: response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/output'
```


Here is the _output_ json definition with type and examples.

```yaml

...

components:
  schemas:
     ...

    output:
      required:
        - result
      properties:
        result:
          type: object
```


## Resources

- [OpenAPI Basic Structure](https://swagger.io/docs/specification/openapi-extensions/)
- [OpenAPI Extensions](https://swagger.io/docs/specification/openapi-extensions/)
- [OpenAPI Tools](https://openapi.tools/)
