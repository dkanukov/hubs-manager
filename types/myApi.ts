/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** ButtonData */
export interface ButtonData {
  /** Button Name */
  button_name: string;
  /** Button Readable */
  button_readable: string;
  /** Action */
  action:
    | GoToPreset
    | OBSSetProgramScene
    | Camera
    | HTTP
    | GoToPresetForCamera
    | Zoom
    | Focus
    | VirtualCamera
    | Room
    | OBSTransition
    | SetToPreset;
}

/** Camera */
export interface Camera {
  /** Camera Ip */
  camera_ip: string;
  /** Camera Port */
  camera_port: number;
  /** Rtsp Main */
  rtsp_main: string;
  /**
   * Action
   * @default "camera"
   */
  action?: string;
}

/** Focus */
export interface Focus {
  /** Focus */
  focus: string;
  /**
   * Action
   * @default "focus"
   */
  action?: string;
}

/** GoToPreset */
export interface GoToPreset {
  /** Preset Token */
  preset_token: number;
  /**
   * Action
   * @default "goto_preset"
   */
  action?: string;
}

/** GoToPresetForCamera */
export interface GoToPresetForCamera {
  /** Preset Token */
  preset_token: number;
  /** Camera Ip */
  camera_ip: string;
  /** Camera Port */
  camera_port: number;
  /** Rtsp Main */
  rtsp_main: string;
  /**
   * Action
   * @default "goto_preset_for_camera"
   */
  action?: string;
}

/** HTTP */
export interface HTTP {
  /** Http Request Type */
  http_request_type: string;
  /** Http Url */
  http_url: string;
  /** Http Request Body */
  http_request_body: string;
  /**
   * Action
   * @default "http"
   */
  action?: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** OBSSetProgramScene */
export interface OBSSetProgramScene {
  /** Obs Scene Num */
  obs_scene_num: number;
  /**
   * Action
   * @default "obs_set_program_scene"
   */
  action?: string;
}

/** OBSTransition */
export interface OBSTransition {
  /** Obs Transition Name */
  obs_transition_name: string;
  /** Obs Transition Duration */
  obs_transition_duration?: number;
  /**
   * Action
   * @default "obs_transition"
   */
  action?: string;
}

/** RemoteController */
export interface RemoteController {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /** Description */
  description?: string;
  /** Config */
  config: Record<string, ButtonData>;
}

/** Room */
export interface Room {
  /** Proxy Ip */
  proxy_ip: string;
  /** Room Number */
  room_number: number;
  /**
   * Action
   * @default "room"
   */
  action?: string;
}

/** SetToPreset */
export interface SetToPreset {
  /** Preset Token */
  preset_token: number;
  /**
   * Action
   * @default "set_preset"
   */
  action?: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: any[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** VirtualCamera */
export interface VirtualCamera {
  /** Proxy Ip */
  proxy_ip: string;
  /** Camera Number */
  camera_number: number;
  /**
   * Action
   * @default "virtual_camera"
   */
  action?: string;
}

/** Zoom */
export interface Zoom {
  /** Zoom */
  zoom: string;
  /**
   * Action
   * @default "zoom"
   */
  action?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title FastAPI
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name RootGet
   * @summary Root
   * @request GET:/
   */
  rootGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/`,
      method: "GET",
      format: "json",
      ...params,
    });

  arbuz = {
    /**
     * No description
     *
     * @name ArbuzArbuzGet
     * @summary Arbuz
     * @request GET:/arbuz
     */
    arbuzArbuzGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/arbuz`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  getControllers = {
    /**
     * No description
     *
     * @name GetControllersGetControllersGet
     * @summary Getcontrollers
     * @request GET:/getControllers
     */
    getControllersGetControllersGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/getControllers`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  updateConf = {
    /**
     * No description
     *
     * @name UpdateConfUpdateConfPost
     * @summary Update Conf
     * @request POST:/updateConf
     */
    updateConfUpdateConfPost: (data: RemoteController, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/updateConf`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  addConfig = {
    /**
     * No description
     *
     * @name AddConfAddConfigPost
     * @summary Add Conf
     * @request POST:/addConfig
     */
    addConfAddConfigPost: (data: RemoteController, params: RequestParams = {}) =>
      this.request<any, HTTPValidationError>({
        path: `/addConfig`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
