require 'test_helper'

class SubAreasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sub_area = sub_areas(:one)
  end

  test "should get index" do
    get sub_areas_url
    assert_response :success
  end

  test "should get new" do
    get new_sub_area_url
    assert_response :success
  end

  test "should create sub_area" do
    assert_difference('SubArea.count') do
      post sub_areas_url, params: { sub_area: { area_id: @sub_area.area_id, incharge: @sub_area.incharge, name: @sub_area.name } }
    end

    assert_redirected_to sub_area_url(SubArea.last)
  end

  test "should show sub_area" do
    get sub_area_url(@sub_area)
    assert_response :success
  end

  test "should get edit" do
    get edit_sub_area_url(@sub_area)
    assert_response :success
  end

  test "should update sub_area" do
    patch sub_area_url(@sub_area), params: { sub_area: { area_id: @sub_area.area_id, incharge: @sub_area.incharge, name: @sub_area.name } }
    assert_redirected_to sub_area_url(@sub_area)
  end

  test "should destroy sub_area" do
    assert_difference('SubArea.count', -1) do
      delete sub_area_url(@sub_area)
    end

    assert_redirected_to sub_areas_url
  end
end
