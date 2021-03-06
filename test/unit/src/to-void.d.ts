import { SimpleLogger, JSConsoleLogger, SyslogLogger, Log4jLogger, NpmLogger, AngularJSLogger, BunyanLogger, CompatibleLogger } from './types';
declare const simpleLoggerToVoid: SimpleLogger;
declare const consoleLoggerToVoid: JSConsoleLogger;
declare const syslogLoggerToVoid: SyslogLogger;
declare const log4jLoggerToVoid: Log4jLogger;
declare const serverLoggerToVoid: Log4jLogger;
declare const npmLoggerToVoid: NpmLogger;
declare const angularJSLoggerToVoid: AngularJSLogger;
declare const bunyanLoggerToVoid: BunyanLogger;
declare const compatibleLoggerToVoid: CompatibleLogger;
export { simpleLoggerToVoid, consoleLoggerToVoid, syslogLoggerToVoid, log4jLoggerToVoid, serverLoggerToVoid, npmLoggerToVoid, angularJSLoggerToVoid, bunyanLoggerToVoid, compatibleLoggerToVoid };
