# coding: utf-8

"""
    Devbook

    Devbook API  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from pydantic import BaseModel, Field
from e2b.api.v1.client.models.environment_state import EnvironmentState


class EnvironmentStateUpdate(BaseModel):
    """
    EnvironmentStateUpdate
    """

    state: EnvironmentState = Field(...)
    __properties = ["state"]

    class Config:
        """Pydantic configuration"""

        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> EnvironmentStateUpdate:
        """Create an instance of EnvironmentStateUpdate from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True, exclude={}, exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> EnvironmentStateUpdate:
        """Create an instance of EnvironmentStateUpdate from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return EnvironmentStateUpdate.parse_obj(obj)

        # raise errors for additional fields in the input
        for _key in obj.keys():
            if _key not in cls.__properties:
                raise ValueError(
                    "Error due to additional fields (not defined in EnvironmentStateUpdate) in the input: "
                    + obj
                )

        _obj = EnvironmentStateUpdate.parse_obj({"state": obj.get("state")})
        return _obj
