import logging
from aws_cdk import (
    aws_lambda as _lambda,
    aws_apigateway as apigateway,
    Stack,
)
from constructs import Construct

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ApiNestStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, env_app: dict, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        try:

            nestHandler = _lambda.Function(
                self,
                "ApiNestHandlerFunction",
                runtime=_lambda.Runtime.NODEJS_18_X,
                code=_lambda.Code.from_asset("../dist"),
                handler="main.handler",
                environment=env_app,
            )

            api = apigateway.RestApi(
                self,
                id="CartAPINestJS",
                rest_api_name="Cart API NestJS",
                deploy=True,
                # default_method_options={"api_key_required": True},
            )

            api.root.add_proxy(
                default_integration=apigateway.LambdaIntegration(
                    nestHandler, proxy=True
                )
            )

            # plan = api.add_usage_plan("UsagePlan",
            #     name="UsagePlanEasy",
            #     api_stages=[
            #         apigateway.StageOptions(stage_name=api.deployment_stage.stage_name)
            #     ],
            #     throttle=apigateway.ThrottleSettings(
            #         rate_limit=10,
            #         burst_limit=2
            #     )
            # )

            # api_key = api.add_api_key("TestApiKey")

            # plan.add_api_key(api_key)

            logger.info("ApiNestStack created successfully")

        except Exception as err:
            logger.error(f"Error in ApiNestStack: {err}")
