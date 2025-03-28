import { Compile, TypeBox, Valibot, Zod } from '@sinclair/typemap';

import * as openapiSchema from '@wsh-2025/schema/src/openapi/schema';

export const getChannelsRequestQuery = Compile(TypeBox(openapiSchema.getChannelsRequestQuery));
export const getChannelsResponse = Compile(TypeBox(openapiSchema.getChannelsResponse));
export const getChannelByIdRequestParams = Compile(TypeBox(openapiSchema.getChannelByIdRequestParams));
export const getChannelByIdResponse = Compile(TypeBox(openapiSchema.getChannelByIdResponse));
export const getEpisodesRequestQuery = Compile(TypeBox(openapiSchema.getEpisodesRequestQuery));
export const getEpisodesResponse = Compile(TypeBox(openapiSchema.getEpisodesResponse));
export const getEpisodeByIdRequestParams = Compile(TypeBox(openapiSchema.getEpisodeByIdRequestParams));
export const getEpisodeByIdResponse = Compile(TypeBox(openapiSchema.getEpisodeByIdResponse));
export const getSeriesRequestQuery = Compile(Valibot(openapiSchema.getSeriesRequestQuery));
export const getSeriesResponse = Compile(Valibot(openapiSchema.getSeriesResponse));
export const getSeriesByIdRequestParams = Compile(Valibot(openapiSchema.getSeriesByIdRequestParams));
export const getSeriesByIdResponse = Compile(Valibot(openapiSchema.getSeriesByIdResponse));
export const getTimetableRequestQuery = Compile(Valibot(openapiSchema.getTimetableRequestQuery));
export const getTimetableResponse = Compile(Valibot(openapiSchema.getTimetableResponse));
export const getProgramsRequestQuery = Compile(Valibot(openapiSchema.getProgramsRequestQuery));
export const getProgramsResponse = Compile(Valibot(openapiSchema.getProgramsResponse));
export const getProgramByIdRequestParams = Compile(Valibot(openapiSchema.getProgramByIdRequestParams));
export const getProgramByIdResponse = Compile(Valibot(openapiSchema.getProgramByIdResponse));
export const getRecommendedModulesRequestParams = Compile(Valibot(openapiSchema.getRecommendedModulesRequestParams));
// ↓ここ変えてる
export const getRecommendedModulesResponse = Compile(Valibot(openapiSchema.getRecommendedModulesErrorResponse));
export const getRecommendedModulesErrorResponse = Compile(Valibot(openapiSchema.getRecommendedModulesErrorResponse));
export const signInRequestBody = Compile(Zod(openapiSchema.signInRequestBody));
export const signInResponse = Compile(Zod(openapiSchema.signInResponse));
export const signUpRequestBody = Compile(Zod(openapiSchema.signUpRequestBody));
export const signUpResponse = Compile(Zod(openapiSchema.signUpResponse));
export const getUserResponse = Compile(Zod(openapiSchema.getUserResponse));
