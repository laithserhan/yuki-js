import { Literal, Identifier, Program, AssignmentExpression, MemberExpression, CallExpression, BaseNode, FunctionDeclaration, ReturnStatement, VariableDeclarator, VariableDeclaration, UnaryExpression } from 'estree';
import { FunctionNames } from './types';
export declare const ValidateMainProgram: (functionNames: FunctionNames) => (program: Program, errors?: Error[]) => Error[];
export declare const ValidateNode: (functionNames: FunctionNames) => (node: BaseNode) => Error[];
export declare const ValidateIdentifier: (functionNames: string[]) => (node: Identifier) => Error[];
export declare const validateMemberExpression: (node: MemberExpression) => Error[];
export declare const ValidateAssignmentExpression: (validateMemberExpression: (node: MemberExpression) => Error[]) => (node: AssignmentExpression) => Error[];
export declare const ValidateCallExpression: (functionNames: FunctionNames) => (node: CallExpression) => Error[];
export declare const ValidateFunctionDeclaration: (externals: string[]) => (node: FunctionDeclaration) => Error[];
export declare const validateReturnStatement: (node: ReturnStatement) => Error[];
export declare const validateVariableDeclaration: (declaration: VariableDeclaration, errors?: Error[]) => Error[];
export declare const validateLiteral: (literal: Literal, parent: BaseNode, errors: Error[]) => Error[];
export declare const validateUnaryExpression: (unary: UnaryExpression, parent: BaseNode, errors: Error[]) => Error[];
export declare const validateConst: (declarator: VariableDeclarator, errors?: Error[]) => Error[];
export declare const validateLet: (declarator: VariableDeclarator, errors?: Error[]) => Error[];
