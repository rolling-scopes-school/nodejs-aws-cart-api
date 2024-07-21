#!/usr/bin/env python3
import os

import aws_cdk as cdk

from infra.api_nest_stack import ApiNestStack
from infra.rds_stack import RdsStack
from infra.vpc_stack import VpcStack

# 0. Set environment variables

env_cdk = {
    "account": "730335652080",
    "region": "eu-north-1",
}

env_app = {
    "AWS_POSTGRES_DB_USER": os.getenv("AWS_POSTGRES_DB_USER"),
    "AWS_POSTGRES_DB_HOST": os.getenv("AWS_POSTGRES_DB_HOST"),
    "AWS_POSTGRES_DB_NAME": os.getenv("AWS_POSTGRES_DB_NAME"),
    "AWS_POSTGRES_DB_PASSWORD": os.getenv("AWS_POSTGRES_DB_PASSWORD"),
    "AWS_POSTGRES_DB_PORT": os.getenv("AWS_POSTGRES_DB_PORT"),
}

# 1. Init cdk app

app = cdk.App()

# # 2. Create VPC stack

# vpc_stack = VpcStack(app, "VpcStack", env=env)

# # 3. Create RDS stack and pass the VPC

# RdsStack(
#     app,
#     "RdsStack",
#     vpc=vpc_stack.vpc,
#     env=env,
# )

# 4. Create API NestJS wrapper lambda stack

ApiNestStack(
    app,
    "ApiNestStack",
    env_app=env_app,
    env=env_cdk,
)

# 5. Generate AWS CloudFormation template

app.synth()
