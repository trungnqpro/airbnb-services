/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BrandWhereUniqueInput } from "./BrandWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BrandUpdateInput } from "./BrandUpdateInput";

@ArgsType()
class UpdateBrandArgs {
  @ApiProperty({
    required: true,
    type: () => BrandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandWhereUniqueInput)
  @Field(() => BrandWhereUniqueInput, { nullable: false })
  where!: BrandWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BrandUpdateInput,
  })
  @ValidateNested()
  @Type(() => BrandUpdateInput)
  @Field(() => BrandUpdateInput, { nullable: false })
  data!: BrandUpdateInput;
}

export { UpdateBrandArgs as UpdateBrandArgs };