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
import { BrandCreateInput } from "./BrandCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateBrandArgs {
  @ApiProperty({
    required: true,
    type: () => BrandCreateInput,
  })
  @ValidateNested()
  @Type(() => BrandCreateInput)
  @Field(() => BrandCreateInput, { nullable: false })
  data!: BrandCreateInput;
}

export { CreateBrandArgs as CreateBrandArgs };
